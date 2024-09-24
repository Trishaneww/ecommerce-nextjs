// next js recognizes this is a route handler by its name

import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();