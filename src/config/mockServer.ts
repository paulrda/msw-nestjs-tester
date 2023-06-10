import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';

// Configure and start the msw server
export const mockServer = setupServer(...handlers);
