package gom.sleep.cave.project.board.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by sleepbear on 2016. 6. 1..
 */

@Entity
@Data
public class Marker {

    public enum MarkerType {
        RECOMMEND, EMPATHY
    }
    @Id
    @GeneratedValue
    private long id;

    @Enumerated(EnumType.STRING)
    private MarkerType markerType;

    private long commentId;

    private long memberId;

    public void setMarkerType(String recommend) {
        this.markerType = MarkerType.valueOf(recommend);
    }

}
