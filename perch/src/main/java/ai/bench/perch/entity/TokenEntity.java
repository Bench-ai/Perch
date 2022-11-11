package ai.bench.perch.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TokenEntity {
    private String userId;
    private String accessToken;
    private String refreshToken;
}
