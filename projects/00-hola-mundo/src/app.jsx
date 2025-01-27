import { TwitterFollowCard } from "./TwitterFollowCard"
export function App () {
    const format = (userName) => `@${userName}`
    return (
        <>
        <TwitterFollowCard formatUserName={format} userName="vegetta777" name="Samuel de luque"/>
        <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Angel Duran"/>
        </>
    )
}