import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  IconButton,
  Button,
  useBoolean,
  Badge
} from "@chakra-ui/react";
import $ from "jquery";
import { makeDBRequest } from '../model/mongoDB';
import { CameraArray } from '../model/camera';
// import { Cameras, CameraList, CameraDetail } from "./view/cameras";


export function SurveyStart(props) {
  const [surveyStarted, setSurveyStarted] = useBoolean();

  return (
    <Box>
      <Button size='sm' variant='outline' colorScheme='blue' onClick={setSurveyStarted.on}>Start Survey</Button>
    </Box>
  )
}


export function SurveyForm() {
  const [surveyStarted, setSurveyStarted] = useBoolean();
  const [surveyForm, setForm] = React.useState(null);
  const [allCameras, setAllCameras] = React.useState(null);
  const [surveyCamera, setSurveyCamera] = React.useState(null);

  const loadCameras = async () => {
    let allCameras = new CameraArray();
    allCameras = await allCameras.loadAllCameras();
    setAllCameras(allCameras);
  }

  React.useEffect(
    () => {
      if (surveyStarted) {
        loadCameras();
      }
    }, [surveyStarted]
  );

  const selectCamera = (camera) => {
    console.log('Set Camera', camera);
    setSurveyCamera(camera);
    

  }

  React.useEffect(() => {
    console.log('Load Survey')
    if (Boolean(surveyCamera)) {
      console.log('Begin Loading Survey', surveyCamera);
      let survey = new window.Survey123WebForm({
        itemId: "7b773ec3ebf149a6982255dd0b2a5e3c",
        clientId: "1GFDSGHAfH07TlMs",
        defaultQuestionValue: {'camera_id': surveyCamera.cameraId, 'camera_make': surveyCamera.make},
        onFormLoaded: (surveyF, ev) => {
          console.log(["FormLoaded", survey, survey?.getQuestions(), ev]);
          // let questionValue = survey.getQuestionValue().then(res => {
          //   console.log('questionValue', res);
          // })
        },
        onFormSubmitted: (surveySubmitted) => {
          let formGlobalId = surveySubmitted.result[0]?.addResults[0].globalId;
          let formValues = surveySubmitted.surveyFeatureSet?.features[0];
          let insertBody = {
            _id: formGlobalId,
            features: formValues
          }
          let dbInsert = makeDBRequest('POST', '/surveysSubmitted', insertBody).then(res => {
            console.log('DB Insert', res, insertBody);
            let procedure = formValues.attributes._procedure;
            let cameraStatus = '';
            let isActive = 0;
            if (procedure === 'New camera placement' || procedure === 'Changing batteries and/or memory card') {
              cameraStatus = 'active';
              isActive = 1;
            } else if (procedure === 'Remove the camera') {
              cameraStatus = 'inactive';
              isActive = 0;
            } else if (procedure === 'Stolen') {
              cameraStatus = 'stolen';
              isActive = 0;
            }

            let cameraUpdate = {
              isActive: isActive,
              status: cameraStatus,
              currentSurvey: formGlobalId,
              dateLastSetup: (new Date()).toLocaleDateString()
            }
            let cameraUpdateResult = makeDBRequest('PATCH', `/cameras/${surveyCamera._id}`, cameraUpdate).then(dbRes => {
              console.log('DB UPDATE', dbRes);
            })
          });
          
          console.log(['Form Submitted', surveySubmitted, formValues, formGlobalId]);
        }
      });
      survey.options.container = "formDiv";
      setForm(survey);

      console.log(survey);

      return () => {
        if (Boolean(surveyCamera)) {
          survey.options.container = null;
        }
      };
    } else {

    }

    
  }, [surveyCamera, surveyCamera?.cameraId]);

  const questions = React.useMemo(() => {
    let questions = surveyForm?.getQuestions();
    console.log([questions]);
  }, [surveyForm]);

  if (!surveyStarted) {
    return (
      <Box>
        <Button variant='outline' colorScheme='blue' onClick={setSurveyStarted.on}>Start Survey</Button>
      </Box>
    );
  } else if (!Boolean(surveyCamera)) {
    return (
      <Box>
        {allCameras?.map((camera, i) => (
            <Flex w="full" p={3} _hover={{ bg: "blackAlpha.100" }} justifyContent="space-between"
              onClick={() => {selectCamera(camera)}}            
            >
              <Heading size="md" color="gray.600">
                {camera.cameraId}
              </Heading>
              <Box>
                <Badge rounded={"md"} colorScheme={Boolean(camera.active) ? "red" : "green"} >
                  <Text>
                    {Boolean(camera.active) ? "Active" : "Inactive"}
                  </Text>
                </Badge>
              </Box>
            </Flex>
        ))}
      </Box>
    );
  } else {
    return (
      
        <Box id="formDiv" display="contents"></Box>
      
    );
  }
}