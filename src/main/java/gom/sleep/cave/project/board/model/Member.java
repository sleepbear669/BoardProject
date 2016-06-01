package gom.sleep.cave.project.board.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by sleepbear on 2016. 6. 1..
 */

@Entity
@Data
public class Member {

    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true)
    private String memberId;

    private String password;

    private String name;

    private String description;

    private String profileImage;
}
