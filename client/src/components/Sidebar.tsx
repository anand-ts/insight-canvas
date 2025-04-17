import React from 'react';
import {
  Box,
  IconButton,
  VStack,
  Text
} from '@chakra-ui/react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  showGrid: boolean;
  onToggleGrid: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  showGrid,
  onToggleGrid
}) => {
  // Using hardcoded colors that match Chakra's default theme
  const bg = 'white';
  const borderColor = 'gray.200';

  return (
    <>
      {/* Toggle button for the sidebar */}
      <IconButton
        aria-label="Toggle Sidebar"
        onClick={onToggle}
        position="fixed"
        right={isOpen ? "240px" : 0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        variant="outline"
        size="sm"
      >
        {isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>

      {/* Sidebar content */}
      <Box
        position="fixed"
        right={isOpen ? 0 : "-240px"}
        top={0}
        height="100vh"
        width="240px"
        bg={bg}
        borderLeft="1px solid"
        borderColor={borderColor}
        transition="right 0.3s ease"
        zIndex={1}
        p={4}
        shadow="md"
      >
        <VStack gap={4} alignItems="stretch">
          <Box position="relative">
            <IconButton
              aria-label="Toggle Dot Grid"
              onClick={onToggleGrid}
              colorScheme={showGrid ? "blue" : "gray"}
              variant={showGrid ? "solid" : "outline"}
            >
              <GridIcon />
            </IconButton>
            <Text fontSize="xs" mt={1}>Grid</Text>
          </Box>
          <Box height="1px" bg={borderColor} my={2} />
          {/* More tools can be added here */}
        </VStack>
      </Box>
    </>
  );
};

// Simple icon components
const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H8V8H4V4Z" stroke="currentColor" strokeWidth="2" />
    <path d="M10 4H14V8H10V4Z" stroke="currentColor" strokeWidth="2" />
    <path d="M16 4H20V8H16V4Z" stroke="currentColor" strokeWidth="2" />
    <path d="M4 10H8V14H4V10Z" stroke="currentColor" strokeWidth="2" />
    <path d="M10 10H14V14H10V10Z" stroke="currentColor" strokeWidth="2" />
    <path d="M16 10H20V14H16V10Z" stroke="currentColor" strokeWidth="2" />
    <path d="M4 16H8V20H4V16Z" stroke="currentColor" strokeWidth="2" />
    <path d="M10 16H14V20H10V16Z" stroke="currentColor" strokeWidth="2" />
    <path d="M16 16H20V20H16V16Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default Sidebar;
