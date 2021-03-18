
import { createContext } from "react";

const RefreshTokenContext = createContext();
const AccessTokenContext = createContext();

// unused
const TokenExpirationContect = createContext();

export {RefreshTokenContext, AccessTokenContext, TokenExpirationContect};
