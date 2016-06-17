package gom.sleep.cave.project.board.repository;

import gom.sleep.cave.project.board.model.Marker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@Repository
public interface MarkerRepository extends JpaRepository<Marker, Long> {

    Long countByCommentIdAndMarkerType(long commentId, Marker.MarkerType markerType);

    Marker findByCommentIdAndMemberId(long commentId, long MemberId);

}
