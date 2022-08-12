import React from 'react';
import { Box, Stack, Flex, Heading, Text, Link as ChakraLink, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
  DrawerHeader, DrawerBody, DrawerFooter, useBoolean, Input, Modal, ModalOverlay, ModalContent, 
  ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Skeleton, StackDivider, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { Route, Routes, Link, useParams } from "react-router-dom";
import { MediaValetApi, MediaValetCategory } from '../model/mediavaletApi';
import { Survey } from '../model/survey';
import { CameraArray } from '../model/camera';
import { makeDBRequest } from '../model/mongoDB';
import moment from 'moment';
import $ from 'jquery';

export function Photos() {
    return (
      <Routes>
        <Route path={"/"} element={<MediaValetFolders />} />
        <Route path={":folderId"} element={<FolderDetail />} />
      </Routes>
    );
  }


export function MediaValetFolders() {
  const [parentCategory, setParentCategory] = React.useState(null);
  const [subCategories, setSubCategories] = React.useState(null);
  const [folderCreateIsOpen, setFolderCreate] = useBoolean();

  let abortController = null;

    const testSearch = async () => {
      // let result = await testMediavaletCalls();
      // console.log('CALLS', result);
      if (abortController) {
        abortController.abort();
        abortController = null;
      }

      abortController = new AbortController();
      console.log('Photos Component Call');
      let mediaValetApi = new MediaValetApi();
      let baseCategory = await mediaValetApi.setBaseCategory('gustavo-submission');
      setParentCategory(baseCategory);
      let subcategories = await mediaValetApi.getSubCategories();
      setSubCategories(subcategories);
      console.log('Photos Component Call', baseCategory, subcategories);
    }
  
    React.useEffect(
      () => {
        testSearch();
        return () => {
          abortController.abort();
        }
      }, []
    )

    const createFolder = async (folderData) => {
      console.log('New Category to create', folderData);
      let mediaValetApi = new MediaValetApi();
      let newFolder = await mediaValetApi.createCategory(folderData.parentId, folderData.treeName);
      let subCats = [];
      Object.assign(subCats, subCategories);
      subCats.push(newFolder);
      setSubCategories(subCats);
      setFolderCreate.off();
    }
  
    return (
      <Box p={3}>
        <Heading color="gray.600">MediaValet {'>'} {parentCategory?.name}</Heading>
        <a href='https://login.mediavalet.com/connect/authorize?client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f&response_type=code&scope=openid%20api&redirect_uri=https://docutraps.azurewebsites.net/mediavalet/auth/callback&state=nonce'>Get Auth</a>

        <Stack mt={4}>
          <Box p={2}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading size='sm' color='gray.600'>SubFolders</Heading>
              </Box>
              <Stack direction='row'>
                <Button variant='outline' size='sm' colorScheme='blue' onClick={setFolderCreate.on}>+ Folder</Button>
                <UploadPhotosModal subCategories={subCategories} parentCategory={parentCategory} />
                <FolderCreateDrawer isOpen={folderCreateIsOpen} onClose={setFolderCreate.off} parentCategory={parentCategory} onSubmit={createFolder} />
              </Stack>
            </Stack>
            <Box bg='white' borderRadius='lg' p={3}>
              <Stack>
                {subCategories?.map((cat, i) => 
                  <Link key={'category-'+i} p={3} _hover={{ bg:'blackAlpha.100' }} cursor='pointer' 
                    to={cat.id}
                  >
                    {cat.name}
                  </Link>
                )}
              </Stack>
            </Box>
          </Box>

        </Stack>

        {/* <a href={`http://localhost:3000/mediavalet/auth/callback?
  code=__O7TY14awF7qVZ31VnaJ411BQQAZem8DQcSvIY2uh4
  &scope=openid%20api
  &state=nonce
  &session_state=CR_iT8Xl3e6tTdAg_3ZTETHJ0pxo4a6XdekYn6qwJxY.O1YWqPhHfEvZ-N_XilSCGw`}>Authenticate</a> */}
      </Box>
    );
}

function FolderDetail(props) {
  const { folderId } = useParams();
  const [category, setCategory] = React.useState(null);
  const [assets, setAssets] = React.useState(null);
  const [linkingIsOpen, setLinking] = useBoolean();

  let abortController = null;

  const loadFolder = async () => {
    // let result = await testMediavaletCalls();
    // console.log('CALLS', result);
    if (abortController) {
      abortController.abort();
      abortController = null;
    }

    abortController = new AbortController();

    let mediaValetCategory = new MediaValetCategory();
    let category = await mediaValetCategory.getCategory(folderId);
    setCategory(category);
    let categoryAssets = await category.getAssets();
    console.log('Category ASsets', categoryAssets);
    setAssets(categoryAssets);

    let mediaValetApi = new MediaValetApi();
    let attributes = await mediaValetApi.getAttributes();
    // console.log('Photos Component Call', baseCategory, subcategories);
  }

  React.useEffect(
    () => {
      loadFolder();
      return () => {
        abortController.abort();
      }
    }, [folderId]
  );

  const handleClick = async (asset) => {
    let result = await asset.updateAttribute('c0c67677-b8eb-4522-844b-a4aeb9be7807', 789);
    
  }

  const linkBySurvey = async () => {

  }

  const linkCoordinates = async(coordinates) => {
    let assetList = [];
    Object.assign(assetList, assets);

    for (let i = 0; i < assetList.length; i++) {
      assetList[i] = await assetList[i].updateAttribute('c0c67677-b8eb-4522-844b-a4aeb9be7807', coordinates.x);
      assetList[i] = await assetList[i].updateAttribute('6ce37da1-e78f-426a-9505-671fe9161272', coordinates.y);
    }
    console.log('UPDATED ASSETS', assetList);

    setAssets(assetList)
  }

  return (
    <Box>
      <Heading>Folder: {category.name}</Heading>

      <Stack mt={4}>
        <Box p={2}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Box>
              <Heading size='sm' color='gray.600'>Assets</Heading>
            </Box>
            <Stack direction='row'>
              <Button variant='outline' colorScheme='blue' size='sm' onClick={setLinking.on}>Link To Survey</Button>
            </Stack>
          </Stack>
          <Box bg='white' borderRadius='lg' p={3}>
            <Stack>
              {assets?.map((asset, i) => 
                <Box key={'asset-'+i} p={3} _hover={{ bg:'blackAlpha.100' }} cursor='pointer' 
                  to={asset.id} onClick={(ev) => {handleClick(asset)}}
                >
                  <Heading size='md' color='gray.600'>{asset.title}</Heading>
                </Box>
              )}
            </Stack>
          </Box>
        </Box>
      </Stack>

      <LinkModal isOpen={linkingIsOpen} onClose={setLinking.off} onSubmit={linkCoordinates}/>
    </Box>
  )
}

function FolderCreateDrawer(props) {
  const [newFolderName, setFolderName] = React.useState('');

  const updateFolderName = (ev) => {
    let value = ev.target.value;
    setFolderName(value);
  }

  const handleSubmit = () => {
    let folderData = {
      parentId: props.parentCategory.id,
      treeName: newFolderName
    }
    if (props.onSubmit) {
      props.onSubmit(folderData);
    }
  }

  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose} placement='right' size='lg'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Add New Folder</DrawerHeader>

        <DrawerBody>
          <Stack p={2}>
            <Flex>
              <Box flex={1}>
                <Text color='gray.500'>Parent Category</Text>
              </Box>
              <Box flex={1}>
                <Text color='gray.600'>{props.parentCategory?.name}</Text>
              </Box>
            </Flex>
            <Flex>
              <Box flex={1}>
                <Text color='gray.500'>New Folder Name</Text>
              </Box>
              <Box flex={1}>
                <Input key={'newName-'+newFolderName} name={'newName-'+newFolderName} type='text' size='sm' variant='outline' 
                  onBlur={updateFolderName}
                />
              </Box>
            </Flex>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={props.onClose}>Cancel</Button>
          <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function LinkModal(props) {
  const [form, setForm] = React.useState(null);
  const [coordinates, setCoordinates] = React.useState(null);
  const [loadingSurvey, setSurveyLoading] = useBoolean(true);
  const [filteredSurveys, setFilteredSurveys] = React.useState(null);

  const handleFormLoad = async (ev) => {
    let formId = ev?.target?.value ?? ev;
    setSurveyLoading.off();
    let survey = await new window.Survey123WebForm({
      itemId: "7b773ec3ebf149a6982255dd0b2a5e3c",
      clientId: "1GFDSGHAfH07TlMs",
      globalId: formId,
      mode: 'edit',
      container: `surveyDiv`,
      onFormLoaded: (surveyF) => {
        console.log(["Loaded Survey", survey, survey?.getQuestions()]);
        let questionValue = survey.getQuestionValue().then(res => {
          console.log('questionValues', res);
          setCoordinates(res.gps_coordinates_of_the_camera_l);
          setSurveyLoading.on();
        })
       
        setForm(survey);
      }
    });
    
  }

  const selectSurvey = async (survey) => {
    handleFormLoad(survey._id);
  }

  const loadSurveys = async () => {
    let filteredSurveys = await makeDBRequest('GET', 
      `/surveysSubmitted?filter={"features.attributes._procedure":"New camera placement"}
      &sort={"features.attributes.date_and_time_of_camera_setup_o":-1}`
    );
    console.log('Filtered Surveys', filteredSurveys);

    if (filteredSurveys.length > 0) {
      //let cameraSetupDate = filteredSurveys[0].features.attributes.date_and_time_of_camera_setup_o;
      //cameraSetupDate = new Date(cameraSetupDate);
      //cameraSetupDate = moment(cameraSetupDate).format('M_D_YYYY');
      setFilteredSurveys(filteredSurveys);
    }
  }

  React.useEffect(
    () => {
      loadSurveys();
    }, []
  );

  const setLat = (ev) => {
    let newCoord = {};
    if (Boolean(coordinates)) {
      Object.assign(newCoord, coordinates);
    }
    newCoord.y = ev.target.value;
    setCoordinates(newCoord);
  }

  const setLon = (ev) => {
    let newCoord = {};
    if (Boolean(coordinates)) {
      Object.assign(newCoord, coordinates);
    }
    newCoord.x = ev.target.value;
    setCoordinates(newCoord);
    
  }

  // 387048b3-86f1-4b99-81b9-46d39f22ca71
  const handleSubmit = () => {
    console.log('Submit Linking');
    props.onSubmit(coordinates);
  }
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size='lg'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Link Assets To Survey</ModalHeader>
        <ModalBody>
          <Stack>
            <Tabs>
              <TabList>
                <Tab>By Selection</Tab>
                <Tab>By ID</Tab>
                <Tab>Manual</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack spacing={0} divider={<StackDivider />}>
                    {filteredSurveys?.map((survey, i) => 
                      <Box p={3} _hover={{ bg:'gray.100'}} cursor='pointer' onClick={() => {selectSurvey(survey)}} >
                        <Text color='gray.600'>{survey.features.attributes.camera_id}_{moment(new Date(survey.features.attributes.date_and_time_of_camera_setup_o)).format('M_D_YYYY')}</Text>
                      </Box>
                    )}
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack p={3}>
                    <Flex w='full'>
                      <Box flex={1}>
                        <Text color='gray.500'>Paste Survey Id</Text>
                      </Box>
                      <Box flex={2}>
                        <Input type='text' size='sm' variant='outline' onChange={handleFormLoad} />
                      </Box>
                    </Flex>
                    
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack p={3}>
                    <Flex w='full'>
                      <Box flex={1}>
                        <Text color='gray.500'>Lat (Y): </Text>
                      </Box>
                      <Box flex={2}>
                        <Input type='text' size='sm' variant='outline' onBlur={setLat} />
                      </Box>
                    </Flex>
                    <Flex w='full'>
                      <Box flex={1}>
                        <Text color='gray.500'>Lon (X): </Text>
                      </Box>
                      <Box flex={2}>
                        <Input type='text' size='sm' variant='outline' onBlur={setLon} />
                      </Box>
                    </Flex>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Flex w='full'>
              <Box flex={1}>
                <Text color='gray.500'>Coordinates: </Text>
              </Box>
              <Box flex={2}>
                <Skeleton isLoaded={loadingSurvey}>
                  <Text color='gray.600'>Lat: {coordinates?.y.toFixed(4)}, Lon: {coordinates?.x?.toFixed(4)}</Text>
                </Skeleton>
              </Box>
            </Flex>
            
          <Box id='surveyDiv' hidden={true}></Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant='outline' mr={3} onClick={props.onClose}>Cancel</Button>
          <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

function UploadPhotosModal(props) {
  const [modalIsOpen, setModalOpen] = useBoolean();
  const [form, setForm] = React.useState(null);
  const [coordinates, setCoordinates] = React.useState(null);
  const [loadingSurvey, setSurveyLoading] = useBoolean(true);
  const [allCameras, setAllCameras] = React.useState(null);
  const [surveyCamera, setSurveyCamera] = React.useState(null);
  const [setupDate, setSetupDate] = React.useState(null);
  const [step, setStep] = React.useState(0);
  const [surveyUsed, setSurveyUsed] = React.useState(null);
  const [filesToUpload, setFilesToUpload] = React.useState(null);
  const [uploadedFiles, setUploadedFiles] = React.useState(null);
  const [isUploading, setIsUploading] = useBoolean();

  const handleFormLoad = async () => {
    let formId = surveyUsed._id
    setSurveyLoading.off();
    let survey = await new window.Survey123WebForm({
      itemId: "7b773ec3ebf149a6982255dd0b2a5e3c",
      clientId: "1GFDSGHAfH07TlMs",
      globalId: formId,
      mode: 'edit',
      container: `surveyDiv`,
      onFormLoaded: (surveyF) => {
        console.log(["Loaded Survey", survey, survey?.getQuestions()]);
        let questionValue = survey.getQuestionValue().then(res => {
          console.log('questionValues', res);
          setCoordinates(res.gps_coordinates_of_the_camera_l);
          setSurveyLoading.on();
        })
       
        setForm(survey);
      }
    });
    
  }

  const loadAllCameras = async () => {
    let allCameras = new CameraArray();
    allCameras = await allCameras.loadAllCameras();
    setAllCameras(allCameras);
  }

  const loadSubmittedSurvey = async (camera) => {
    let filteredSurveys = await makeDBRequest('GET', 
      `/surveysSubmitted?filter={"features.attributes.camera_id":"${camera.cameraId}", "features.attributes._procedure":"New camera placement"}
      &sort={"features.attributes.date_and_time_of_camera_setup_o":-1}`
    );
    console.log('Filtered Surveys', filteredSurveys);

    if (filteredSurveys.length > 0) {
      let cameraSetupDate = filteredSurveys[0].features.attributes.date_and_time_of_camera_setup_o;
      cameraSetupDate = new Date(cameraSetupDate);
      cameraSetupDate = moment(cameraSetupDate).format('M_D_YYYY');
      setSurveyUsed(filteredSurveys[0]);
      setSetupDate(cameraSetupDate);
    }
  }

  React.useEffect(
    () => {
      loadAllCameras();
    }, []
  )

  React.useEffect(
    () => {
      loadSubmittedSurvey(surveyCamera);
    }, [surveyCamera, surveyCamera?.cameraId]
  )

  React.useEffect(
    () => {
      if (step === 2) {
        handleFormLoad();
      }
    }, [step]
  );

  const handleFileChange = (ev) => {
    let files = ev.target.files;
    console.log('files', files);
    setFilesToUpload(files);
  }
  
  const getCategory = async () => {
    let categoryName = surveyCamera.cameraId + '_' + setupDate;
    console.log('CategoryName', categoryName, props.subCategories);
    let foundIndex = props.subCategories?.findIndex( ({ name }) => name === categoryName);
    if (foundIndex !== -1) {
      return props.subCategories[foundIndex];
    } else {
      let mediaValetApi = new MediaValetApi();
      let category = await mediaValetApi.createCategory(props.parentCategory.id, categoryName);
      category = new MediaValetCategory(category);
      return category;
    }
  }

  // 387048b3-86f1-4b99-81b9-46d39f22ca71
  const handleSubmit = async () => {
    console.log('Submit Linking');
    setIsUploading.on();

    let category = await getCategory();
    console.log('Category', category);
    let mediaValetApi = new MediaValetApi();
    for (let i in Object.keys(filesToUpload)) {
      let file = filesToUpload[i];
      let uploadRes = await mediaValetApi.uploadAssetFullSteps(file, category, coordinates);
      setUploadedFiles(parseInt(i));
    }
    setIsUploading.off();
    clearContents();
    setModalOpen.off();
    //props.onSubmit(coordinates);
  }

  const clearContents = () => {
    setForm(null);
    setCoordinates(null);
    setAllCameras(null);
    setSurveyCamera(null) ;
    setSetupDate(null);
    setStep(0);
    setSurveyUsed(null);
    setFilesToUpload(null);
    setUploadedFiles(null);
  }

  return (
    <>
      <Button size='sm' colorScheme='blue' onClick={setModalOpen.on} >Upload</Button>
      <Modal isOpen={modalIsOpen} onClose={setModalOpen.off} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Photos</ModalHeader>
          <ModalBody>
            <Stack p={3}>
              
              {step === 0 &&
                allCameras?.map((camera, i) => (
                  <Flex w="full" p={3} _hover={{ bg: "blackAlpha.100" }} justifyContent="space-between" 
                    onClick={() => {setStep(step + 1); setSurveyCamera(camera); }}
                  >
                    <Heading size="sm" color="gray.600">
                      {camera.cameraId}
                    </Heading>
                  </Flex>
                ))
              }

              {step === 1 &&
                <Box>
                  <Heading size='sm' color='gray.600'>{surveyCamera.cameraId}_{setupDate}</Heading>

                </Box>
              }

              {step === 2 &&
                <Flex w='full'>
                  <Box flex={1}>
                    <Text color='gray.500'>Coordinates: </Text>
                  </Box>
                  <Box flex={2}>
                    <Skeleton isLoaded={loadingSurvey}>
                      <Text color='gray.600'>Lat: {coordinates?.y.toFixed(4)}, Lon: {coordinates?.x?.toFixed(4)}</Text>
                    </Skeleton>
                  </Box>
                </Flex>
              }

              {step === 3 &&
                <Box>
                  <Stack w='full'>
                    <Flex w='full' alignItems='center' justifyContent='center'>
                      <Button size='sm' variant='outline' colorScheme='blue' onClick={() => {$('#fileInput').click()}}>Browse Photos</Button>
                      <Input id='fileInput' hidden type='file' multiple={true} accept="image/*, video/*" onChange={handleFileChange} />
                    </Flex>
                    <Box>
                      <Text color='gray.600'>({filesToUpload?.length}) Files To Upload</Text>
                      <Stack maxH='400px' overflow='auto' spacing={0} divider={<StackDivider />}>
                        {Object.keys(filesToUpload ?? {})?.map((index, i) =>
                          <Box p={2}>
                            <Text color='gray.600'>{i+1}. {filesToUpload[index].name}</Text>
                          </Box>
                        )}
                      </Stack>
                    </Box>

                    {isUploading &&
                      <Box>
                        <Heading size='md' color='gray.500'>Uploading...</Heading>
                        <Text color='gray.600'>{(uploadedFiles ?? -1) + 1} uploaded out of {filesToUpload.length}</Text>
                      </Box>
                    }
                  </Stack>
                </Box>
              }

            </Stack>
            <Box id='surveyDiv' hidden={true}></Box>
          </ModalBody>

          <ModalFooter>
            {(step > 0 && step < 3) &&
              <Stack direction='row'>
                <Button variant='outline' onClick={() => {if (step !== 0) {setStep(step - 1)}}}>Previous</Button>
                <Button colorScheme='blue' onClick={() => {setStep(step + 1)}}>Next</Button>
              </Stack>
            }
            {step === 3 &&
              <Stack direction='row'>
                <Button variant='outline' mr={3} onClick={setModalOpen.off}>Cancel</Button>
                <Button colorScheme='blue' onClick={handleSubmit} isDisabled={(filesToUpload?.length === 0)} 
                  isLoading={isUploading}
                >Submit</Button>
              </Stack>
            }
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}