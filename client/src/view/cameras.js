import { Box, Stack, Flex, Heading, Badge, Text, StackDivider } from "@chakra-ui/react";
import React from "react";
import { CameraArray } from "../model/camera";
import { Route, Routes, Link, useParams } from 'react-router-dom';


export function Cameras() {
 
  return (
    <Routes>
      <Route path={'/'} element={<CameraList />} />
      <Route path={':cameraId'} element={<CameraDetail />} />
    </Routes>
  )
}

export class CameraList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCameras: null
    }
    
    this.init = this.init.bind(this);

  }

  componentDidMount() {
    this.init();
  }

  init() {
    let allCameras = new CameraArray();
    allCameras.loadSimCameras();

    console.log(allCameras);
    this.setState({
      allCameras: allCameras
    });
  }

  render() {
    return (
      <Box p={3}>
        <Box px={3} py={1}>
          <Heading size='md' color='gray.500'>Cameras</Heading>
        </Box>
        <Stack bg='white' p={3} borderRadius='lg' divider={<StackDivider />}>
          {this.state.allCameras?.map((camera, i) => 
            <Link to={camera.cameraId}>
              <Flex w='full' p={3} _hover={{ bg: 'blackAlpha.100'}} justifyContent='space-between'>
                <Heading size='md' color='gray.600'>{camera.cameraId}</Heading>
                <Box>
                  <Badge colorScheme={(Boolean(camera.active) ? 'red' : 'green')}>
                    <Text>
                      {Boolean(camera.active) ? 'Active' : 'Inactive'}
                    </Text>
                  </Badge>
                  </Box>
              </Flex>
            </Link>
          )}
        </Stack>
      </Box>
    )
  }
}

function CameraDetail(props) {
  let { cameraId } = useParams();

  return (
    <Box>
      <Heading color='gray.600'>Camera Detail: {cameraId}</Heading>
    </Box>
  )
}