import {authorizeResponse} from "@/app/(oauth)/authorize/actions";

export default function AuthorizePage({ searchParams }) {
    return (
        <form action={authorizeResponse}>
            <input type={"text"} name={"username"} defaultValue={searchParams.username} />
            <button type="submit">Submit</button>
        </form>
    )
}
