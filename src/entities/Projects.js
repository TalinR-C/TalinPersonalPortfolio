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

    // Add this filter method
  static async filter(query, sort = null, limit = null) {
    let projects = await this.list();
    // Filter by query
    projects = projects.filter(project => {
      let matches = true;
      for (const key in query) {
        if (project[key] !== query[key]) {
          matches = false;
          break;
        }
      }
      return matches;
    });
    // Sort if needed
    if (sort) {
      const [field, direction] = sort.startsWith('-')
        ? [sort.slice(1), 'desc']
        : [sort, 'asc'];
      projects = projects.sort((a, b) =>
        direction === 'desc'
          ? new Date(b[field]) - new Date(a[field])
          : new Date(a[field]) - new Date(b[field])
      );
    }
    // Limit if needed
    if (limit) {
      projects = projects.slice(0, limit);
    }
    return projects;
  }
  
}