import { createThirdwebClient } from 'thirdweb';

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
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
