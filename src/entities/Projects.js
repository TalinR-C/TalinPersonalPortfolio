export class Project {
  static async list() {
    try {
      const response = await import('../data/projects.json');
      return response.default.projects;
    } catch (error) {
      console.error('Error loading projects:', error);
      return [];
    }
  }

  static async getById(id) {
    const projects = await this.list();
    return projects.find(project => project.id === id);
  }
}