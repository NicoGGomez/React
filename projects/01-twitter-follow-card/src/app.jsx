import { TwitterFollowCard } from "./TwitterFollowCard"
export function App () {
    const format = (userName) => `@${userName}`
    return (
        <>
        <TwitterFollowCard initialIsFollowing={true} formatUserName={format} userName="vegetta777" name="Samuel de luque"/>
        <TwitterFollowCard initialIsFollowing={false} formatUserName={format} userName="midudev" name="Miguel Angel Duran"/>
        </>
    )
}