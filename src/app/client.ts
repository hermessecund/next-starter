import { createThirdwebClient } from 'thirdweb';
import { useState } from 'react';

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
    throw new Error('No client ID provided');
}

// State to track sidebar visibility
export const useSidebarState = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return { sidebarVisible, toggleSidebar };
};

export const client = createThirdwebClient({
    clientId: clientId,
});
