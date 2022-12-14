package ai.bench.perch.entity;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UserEntity {

    @NotBlank
    @Size(min = 3, max = 30)
    private String username;
    @NotBlank
    @Email
    private String email;

}
