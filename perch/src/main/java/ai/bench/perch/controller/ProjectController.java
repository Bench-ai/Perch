package ai.bench.perch.controller;

import ai.bench.perch.entity.ProjectEntity;
import ai.bench.perch.model.Project;
import ai.bench.perch.model.User;
import ai.bench.perch.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/private/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @GetMapping(value = "/all/user/current")
    public ResponseEntity<List<Project>> getProjectsByCurrentUser(@AuthenticationPrincipal User user) {
        List<Project> projectList = projectService.loadProjectsByUserId(user.getId());
        return ResponseEntity.ok(projectList);
    }

    @GetMapping(value = "/all/user/{id}")
    public ResponseEntity<List<Project>> getProjectsById(@PathVariable("id") String id) {
        List<Project> projectList = projectService.loadProjectsByUserId(id);
        return ResponseEntity.ok(projectList);
    }

    @GetMapping(value = "/id/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable("id") String id) {
        try {
            Project project = projectService.findById(id);
            return ResponseEntity.ok(project);
        } catch(Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/title/{title}")
    public ResponseEntity getProjectByTitle(@PathVariable("title") String title) {
        try {
            Project project = projectService.findProjectByTitle(title);
            return ResponseEntity.ok(project);
        } catch(Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value = "/create")
    @Transactional
    public ResponseEntity createProject(@Valid @RequestBody ProjectEntity projectEntity, @AuthenticationPrincipal User user) {
        try {
            projectService.createProject(projectEntity, user);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
