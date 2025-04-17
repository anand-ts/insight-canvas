import React, { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  // State for canvas dimensions - now using full window size
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // State for sidebar and grid
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
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
    <div className="App" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Floating header */}
      <Box 
        position="absolute" 
        top={4} 
        left={4} 
        zIndex={10}
        bg="white" 
        p={2} 
        borderRadius="md" 
        boxShadow="sm"
      >
        <Heading as="h1" size="md">InsightCanvas</Heading>
      </Box>
      
      {/* Full page canvas container */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
      >
        <Canvas 
          width={dimensions.width} 
          height={dimensions.height} 
          showGrid={showGrid}
        />
      </Box>
      
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
