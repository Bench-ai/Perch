package ai.bench.perch.service;

import ai.bench.perch.entity.ProjectEntity;
import ai.bench.perch.model.Project;
import ai.bench.perch.model.User;
import ai.bench.perch.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public void createProject(ProjectEntity projectEntity, User user) {
        String name = ProjectEntity.createName();
        Project project = new Project(name, projectEntity.getDescription(), projectEntity.getProjectJson());
        project.setOwner(user);
        this.projectRepository.save(project);
    }

    public Project findProjectByTitle(String title) throws Exception {
        return this.projectRepository.findByName(title)
                .orElseThrow(() -> new Exception(
                        String.format("Project: %s was not found", title)));
    }

    public Project findById(String id) throws Exception {
        return this.projectRepository.findById(id)
                .orElseThrow(() -> new Exception(
                        String.format("Project with id: %s was not found", id)));
    }

    public List<Project> loadProjectsByUserId(String userId) {
        Optional<List<Project>> projectList = this.projectRepository.findProjectsByOwner_Id(userId);
        if (projectList.isEmpty()) {
            return new ArrayList<>();
        }
        return projectList.get();
    }
}
