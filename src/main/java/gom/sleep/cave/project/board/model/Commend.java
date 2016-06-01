package gom.sleep.cave.project.board.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by sleepbear on 2016. 6. 1..
 */

@Entity
@Data
public class Commend {

    @Id
    @GeneratedValue
    private long id;


}
