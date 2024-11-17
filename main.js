document.addEventListener('DOMContentLoaded', function() {

    const avatarElement = document.querySelector('.profile-avatar')
    const nameElement = document.querySelector('.profile-name')
    const usernameElement = document.querySelector('.profile-username')
    const repoElement = document.querySelector('.numbers-repo')
    const followersElement = document.querySelector('.numbers-followers')
    const followingElement = document.querySelector('.numbers-following')
    const linkElement = document.querySelector('.profile-link')
    // const linkGit = prompt('Digite seu username do Github:')

    fetch(`https://api.github.com/users/mario-netto`)
        .then(function(res) {
            if (!res.ok) {
                throw new Error(`Erro HTTP: ${res.status}`)
            }
            return res.json()
        })
        .then(function(json) {
            avatarElement.src = json.avatar_url
            nameElement.innerText = json.name || 'Nome não disponível'
            usernameElement.innerText = `@${json.login}`
            repoElement.innerText = json.public_repos
            followersElement.innerText = json.followers
            followingElement.innerText = json.following
            linkElement.href = json.html_url
        })
        .catch(function(error) {
            alert('Ocorreu um erro ao buscar informações, tente novamente mais tarde.')
            console.error(error) 
    })
})
