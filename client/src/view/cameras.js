import { Box, Stack, Flex, Heading, Badge, Text, StackDivider, Button, Drawer, DrawerBody, Input, Select, 
  DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useBoolean,
  FormControl, FormLabel, FormHelperText} from "@chakra-ui/react";
import React from "react";
import { Camera, CameraArray } from "../model/camera";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { makeDBRequest } from "../model/mongoDB";

export function Cameras() {
  return (
    <Routes>
      <Route path={"/"} element={<CameraList />} />
      <Route path={":cameraId"} element={<CameraDetail />} />
    </Routes>
  );
}

export class CameraList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCameras: null,
    };

    this.init = this.init.bind(this);
    this.uploadCamera = this.uploadCamera.bind(this);
  }

  componentDidMount() {
    this.init();
  }
  
  async init() {
    //{"features.attributes.date_and_time_of_camera_setup_o":-1}
    let filteredCameras = await makeDBRequest('GET', '/surveysSubmitted?filter={"features.attributes.camera_id":"CAMERA1"}');
    console.log('Filtered Cameras', filteredCameras);

    let allCameras = new CameraArray();
    allCameras = await allCameras.loadAllCameras();

    console.log(allCameras);
    this.setState({
      allCameras: allCameras,
    });
  }

  async uploadCamera(camera)  {
    let allCameras = this.state.allCameras;
    await camera.insertDB()
    allCameras.push(camera);

    this.setState({
      allCameras: allCameras
    });
  }

  render() {
    return (
      <Box p={3}>
        <Stack direction='row' px={3} py={1} justifyContent='space-between'>
          <Box>
            <Heading size="md" color="gray.500">
              Cameras
            </Heading>
          </Box>
          <Box>
            {/* <Button size='sm' variant='outline' colorScheme='blue' */}
            <CameraInsertDrawer onSubmit={this.uploadCamera}/>
          </Box>
        </Stack>
        <Stack bg="white" p={3} borderRadius="lg" divider={<StackDivider />}>
          {this.state.allCameras?.map((camera, i) => (
            <Link to={camera.cameraId}>
              <Flex
                w="full"
                p={3}
                _hover={{ bg: "blackAlpha.100" }}
                justifyContent="space-between"
              >
                <Heading size="md" color="gray.600">
                  {camera.cameraId}
                </Heading>
                <Box>
                  <Badge
                    rounded={"md"}
                    colorScheme={Boolean(camera.isActive) ? "green" : "red"}
                  >
                    <Text>
                      {Boolean(camera.isActive) ? "Active" : "Inactive"}
                    </Text>
                  </Badge>
                </Box>
              </Flex>
            </Link>
          ))}
        </Stack>
      </Box>
    );
  }
}

function CameraDetail(props) {
  let { cameraId } = useParams();

  return (
    <Box>
      <Heading color="gray.600">Camera Detail: {cameraId}</Heading>
    </Box>
  );
}

function CameraInsertDrawer(props) {
  const [isOpen, setDrawerState] = useBoolean();
  const [cameraId, setCameraId] = React.useState(null);
  const [make, setMake] = React.useState(null);
  const [makeOther, setMakeOther] = React.useState(null);
  const [imei, setImei] = React.useState(null);
  const [dateAdded, setDateAdded] = React.useState((new Date()).toLocaleDateString());
  
  //DEFAULT functioning - 1
  //DEFAULT active - 0
  //DEFAULT status - inactive     // active (yes, no) or status ('inactive', 'active', 'lost', 'broken') or both??

  const handleSubmit = () => {
    let camera = new Camera();
    camera.cameraId = cameraId;
    camera.make = make;
    camera.makeOther = makeOther;
    camera.imei = imei;
    camera.dateAdded = dateAdded;
    camera.functioning = 1;
    camera.isActive = 0;
    camera.status = 'inactive';
    console.log('Create New Camera', camera);
    props.onSubmit(camera);
    setDrawerState.off();
  }

  return (
    <>
      <Button size='sm' variant='outline' colorScheme='blue' onClick={setDrawerState.on}>+ Camera</Button>

      <Drawer isOpen={isOpen} onClose={setDrawerState.off} placement='right' size='lg'>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Camera</DrawerHeader>

          <DrawerBody>
            <Stack>
              <FormControl>
                <FormLabel>
                  <Text fontSize='sm' color='gray.600'>Camera ID</Text>
                  <Input key={`cameraId-${cameraId}`} name={`cameraId-${cameraId}`} type='text' size='sm' 
                    variant='outline' isRequired onBlur={(ev) => {setCameraId(ev.target.value)}} defaultValue={cameraId}
                  />
                </FormLabel>
              </FormControl>

              <FormControl>
                <FormLabel>
                  <Text fontSize='sm' color='gray.600'>Make</Text>
                  <Select key={`make-${make}`} name={`make-${make}`} size='sm' variant='outline' isRequired 
                    onChange={(ev) => {setMake(ev.target.value)}} defaultValue={make}
                  >
                    <option >N/A</option>
                    <option value='Browning'>Browning</option>
                    <option value='Bushnell'>Bushnell</option>
                    <option value='Cuddeback'>Cuddeback</option>
                    <option value='Moultrie'>Moultrie</option>
                    <option value='Reconyx'>Reconyx</option>
                    <option value='Spypoint'>Spypoint</option>
                    <option value='Other'>Other</option>
                  </Select>
                  {make === 'Other' &&
                    <Input key={`other-${makeOther}`} name={`other-${makeOther}`} type='text' size='sm' variant='outline' 
                      defaultValue='Other Make...' onBlur={(ev) => {setMakeOther(ev.target.value)}}
                    />
                  }
                </FormLabel>
              </FormControl>

              <FormControl>
                <FormLabel>
                  <Text fontSize='sm' color='gray.600'>IMEI</Text>
                  <Input key={`imei-${imei}`} name={`imei-${imei}`} type='text' size='sm' variant='outline' 
                    onBlur={(ev) => {setImei(ev.target.value)}} defaultValue={imei}
                  />
                </FormLabel>
              </FormControl>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Stack direction='row'>
              <Button variant='outline' onClick={setDrawerState.off} >Cancel</Button>
              <Button colorScheme='blue' onClick={handleSubmit} >Submit</Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
