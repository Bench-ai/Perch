package ai.bench.perch.repository;

import ai.bench.perch.model.Project;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends MongoRepository<Project, String> {
    Optional<Project> findByName(String title);
    Optional<List<Project>> findProjectsByOwner_Id (ObjectId id);
    default Optional<List<Project>> findProjectsByOwner_Id(String id) {
        return findProjectsByOwner_Id(new ObjectId(id));
    }
}
