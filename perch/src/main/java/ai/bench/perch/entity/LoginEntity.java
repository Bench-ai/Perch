package ai.bench.perch.entity;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginEntity {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
