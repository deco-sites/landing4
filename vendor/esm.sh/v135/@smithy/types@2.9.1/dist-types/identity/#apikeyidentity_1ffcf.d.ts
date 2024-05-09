import { Identity, IdentityProvider } from "../identity/identity.d.ts";
/**
 * @public
 */
export interface ApiKeyIdentity extends Identity {
    /**
     * The literal API Key
     */
    readonly apiKey: string;
}
/**
 * @public
 */
export type ApiKeyIdentityProvider = IdentityProvider<ApiKeyIdentity>;
