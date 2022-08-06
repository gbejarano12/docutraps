import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Heading, Text, Stack, StackDivider, IconButton } from '@chakra-ui/react';
import { Cameras, CameraList, CameraDetail } from './view/cameras';
// import "https://survey123.arcgis.com/api/jsapi";


// function App() {
//   const [data, setData] = React.useState(null);

//   // React.useEffect(() => {
//   //   fetch('/api')
//   //     .then((res) => res.json())
//   //     .then((data) => setData(data.message));
//   // }, []);

//   return (
//     <div className="App">
//       <SurveyForm2 key='form2'/>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      menuNavIsOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      menuNavIsOpen: !this.state.menuNavIsOpen
    })
  }

  
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  render() {
    return (
      <ChakraProvider>
        <Flex className="App" direction='column' minHeight='100vh' width='full'>
          {/* <SurveyForm key='form'/> */}
          <Flex p={3} shadow='sm' alignItems='center'>
            <IconButton size='md' variant='outline' mr={5} onClick={this.toggleNav} icon={<i >M</i>} display={{base: 'block', lg: 'none'}} />
            <Heading as='h5' size='md' color='gray.600'>DocuTraps</Heading>
          </Flex>
          <Flex flex={1} bg='whitesmoke'>
            
            <Box width='300px' height='auto' shadow='md' bg='white'
              display={{ base: (this.state.menuNavIsOpen ? 'block' : 'none'), lg: 'block'}}
            >
              <MenuNav />
            </Box>
            
            <Box flex={1} height='auto'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='map' element={<Map />} />
                <Route path='surveys' element={<SurveyForm key='form'/>} />
                <Route path='photos' element={<Photos />} />
                <Route path='cameras/*' element={<Cameras />} />
                <Route path='documents' element={<Documents />} />
              </Routes>
            </Box>
          </Flex>

        </Flex>
      </ChakraProvider>
    );
  }
}

function MenuNav() {

  return (
    <Box>
      <Stack divider={<StackDivider />} spacing={0}>
        <Link to='/'>
          <Box py={2} px={3} _hover={{bg: 'green.100'}} cursor='pointer'>
            <Heading as='h6' size='sm' color='gray.600'>Dashboard</Heading>
          </Box>
        </Link>
        <Link to='/map'>
          <Box py={2} px={3} _hover={{bg: 'green.100'}} cursor='pointer'>
            <Heading as='h6' size='sm' color='gray.600'>Map</Heading>
          </Box>
        </Link>
        <Link to='/surveys'>
          <Box py={2} px={3} _hover={{bg: 'green.100'}} cursor='pointer'>
            <Heading as='h6' size='sm' color='gray.600'>Surveys</Heading>
          </Box>
        </Link>
        <Link to='/photos'>
          <Box py={2} px={3} _hover={{bg: 'green.100'}} cursor='pointer'>
            <Heading as='h6' size='sm' color='gray.600'>Photos</Heading>
          </Box>
        </Link>
        <Link to='/cameras'>
          <Box py={2} px={3} _hover={{bg: 'green.100'}} cursor='pointer'>
            <Heading as='h6' size='sm' color='gray.600'>Cameras</Heading>
          </Box>
        </Link>
        <Link to='/documents'>
          <Box py={2} px={3} _hover={{bg: 'green.100'}} cursor='pointer'>
            <Heading as='h6' size='sm' color='gray.600'>Documents</Heading>
          </Box>
        </Link>
      </Stack>
    </Box>
  )
}

function Dashboard() {
  return (
    <Box p={3}>
      <Heading color='gray.600'>DashBoard</Heading>
    </Box>
  )
}

function Map() {
  return (
    <Box p={3}>
      <Heading color='gray.600'>Map</Heading>
    </Box>
  )
}

function Surveys() {

  return (
    <Box p={3}>
      <Heading color='gray.600'>Surveys</Heading>
    </Box>
  )
}

function Photos() {

  return (
    <Box p={3}>
      <Heading color='gray.600'>Photos</Heading>
    </Box>
  )
}

function Documents() {

  return (
    <Box p={3}>
      <Heading color='gray.600'>Documents</Heading>
    </Box>
  )
}

// class SurveyForm2 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       arr: []
//     }

//     this.init = this.init.bind(this);
//   }

//   componentDidMount() {
//     this.init();

//     return () => {
//       this.setState = {
//         arr: []
//       }
//     }
//   }

//   // componentWillUnmount() {
//   //   let arr = this.state.arr;
//   //   this.setState({
//   //     arr: []
//   //   })
//   // }

//   init() {
//     console.log('Getting Form');
//     // let survey = new window.Survey123WebForm({
//     //   itemId: '7b773ec3ebf149a6982255dd0b2a5e3c',
//     //   container: 'formDiv2',
//     //   clientId: '1GFDSGHAfH07TlMs'
//     // });
//     let arr = this.state.arr;
//     arr.push('hello');
//     this.setState({
//       arr: arr
//     })
//   }

//   render() {
//     return (
//       <div key='form' id='formDiv2'>
//        {this.state.arr.map((greet, i) => 
//           <p>{greet}</p>
//         )}
//       </div>
//     );
//   }
// }

function SurveyForm() {
  const [surveyForm, setForm] = React.useState(null);
  React.useEffect(
    () => {
      let survey = new window.Survey123WebForm({
        itemId: '7b773ec3ebf149a6982255dd0b2a5e3c',        
        clientId: '1GFDSGHAfH07TlMs',
        onFormLoaded: (surveyF, ev) => {
          console.log(['FormLoaded', survey, survey?.getQuestions(), ev])
        }
      });
      survey.options.container = 'formDiv';
      setForm(survey);
      
      console.log(survey);

      return () => {
        console.log('Clear');
        survey.options.container = null;
        console.log($('#formDiv'));
      }
    }, []
  );

  const questions = React.useMemo(
    () => {
      let questions = surveyForm?.getQuestions();
      console.log([questions]);
    }, [surveyForm]
  )

  return (
    <Box id='formDiv' display='contents'>
      
    </Box>
  )
}

export default App;
