import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  // State for canvas dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.7
  });

  // State for sidebar and grid
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.7
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className="App">
      <Container maxW="container.xl" py={4}>
        <Heading as="h1" mb={4}>InsightCanvas</Heading>
        <Box 
          w="100%" 
          h="70vh" 
          border="1px solid" 
          borderColor="gray.200" 
          borderRadius="md"
          overflow="hidden"
          position="relative"
        >
          <Canvas 
            width={dimensions.width} 
            height={dimensions.height} 
            showGrid={showGrid}
          />
        </Box>
      </Container>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar} 
        showGrid={showGrid} 
        onToggleGrid={toggleGrid}
      />
    </div>
  );
}

export default App;
