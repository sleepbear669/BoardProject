package gom.sleep.cave.project.board.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by sleepbear on 2016. 5. 31..
 */

@Entity
@Data
public class Comment {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "member_id")
    private Member member;

    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    private Date registeredDate;

    @PrePersist
    void onCreate() {
        this.registeredDate = new Date();
    }
}
