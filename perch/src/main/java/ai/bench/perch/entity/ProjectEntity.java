package ai.bench.perch.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
public class ProjectEntity {
    private static String userId;
    @NotBlank
    private static String title;
    private String description;
    @NotBlank
    private String projectJson;

    public static String getProjectTitle(String name) {
        return name.split("/")[1];
    }

    public static String createName() {
        return String.format("%s/%s", userId, title);
    }
}
