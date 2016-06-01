package gom.sleep.cave.project.board.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by sleepbear on 2016. 5. 31..
 */

@Entity
@Data
public class Comment {

    @Id
    @GeneratedValue
    private long id;
//
//    private long userId;
//
//    private String content;
//
//    @DateTimeFormat(pattern = "yyyy.MM.dd hh:mm:ss")
//    private Date registeredDate;
}
