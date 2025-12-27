const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'https://github.com/jlSebeleuuu/LaBulleMC-Launcher/blob/main/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/jlSebeleuuu/LaBulleMC-Launcher/refs/heads/main/distro/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api