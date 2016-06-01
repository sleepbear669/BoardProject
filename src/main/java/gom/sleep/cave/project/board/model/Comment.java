package gom.sleep.cave.project.board.model;

import lombok.Data;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private String content;

    @Generated(GenerationTime.INSERT)
    @CreatedDate
    @DateTimeFormat(pattern = "yyyy.MM.dd hh:mm")
    private Date registeredDate;
}
