const simpleGit = require('simple-git/promise')

async function demo(targetBranch) {
    await simpleGit('./local-repo').clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', 'demo-project')
    const git = simpleGit('./local-repo/demo-project')
    console.log('branches: ' + (await git.branchLocal()).all)
    console.log(`checkout branch: ${targetBranch}`)
    await git.checkoutLocalBranch(targetBranch)
    console.log('branches: ' + (await git.branchLocal()).all)
}

demo('admin')