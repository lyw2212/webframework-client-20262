import { LoginResponse} from "@/types/user";
import { apiFetch } from "./http";

export async function login(email: string, password: string): Promise<LoginResponse>{
    const response = await apiFetch("/user-account/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })

    return response.json()
}