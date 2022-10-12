package ai.bench.test.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    private String UUID;
    private String userName;

    public void setUUID(String uuid) {
        this.UUID = uuid;
    }

    @Id
    public String getUUID() {
        return UUID;
    }
}
