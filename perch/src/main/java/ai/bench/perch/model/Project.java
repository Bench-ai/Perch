package ai.bench.perch.model;

import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "projects")
@Data
public class Project {
    @Id
    private String id;
    @DocumentReference(lazy = true)
    private User owner;
    @Indexed(unique = true)
    @NonNull
    private String name;
    @NonNull
    private String description;
    @NonNull
    private String projectJson;
}
