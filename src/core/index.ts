import { ProjectConfig } from '../types/config'

let projectConfig: ProjectConfig

export function getProjectConfig(): ProjectConfig {
	return projectConfig
}

export function setProjectConfig(newProjectConfig: ProjectConfig) {
	projectConfig = newProjectConfig
}
