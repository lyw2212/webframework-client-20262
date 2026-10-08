import { MeResponse } from "@/types/user";
import { apiFetch } from "./http";

export async function getMe(accessToken: string): Promise<MeResponse>{
    const response = await apiFetch("/user-account/me", {
        accessToken
    })

    return response.json()
}