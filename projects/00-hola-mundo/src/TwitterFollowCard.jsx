export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) {

    const imgSrc = `https://unavatar.io/x/${userName}`

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="el avatar de vegetta777" src={imgSrc} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside className="tw-followCard-actions">
                <button>Seguir</button>
            </aside>
        </article>
    )
}