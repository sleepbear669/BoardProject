package gom.sleep.cave.project.board.service;

import gom.sleep.cave.project.board.model.Marker;
import gom.sleep.cave.project.board.repository.MarkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by sleepbear on 2016. 6. 15..
 */
@Service
public class MarkerService {

    @Autowired
    private MarkerRepository markerRepository;


    public Marker add(Marker marker) {
        final Marker alreadyAdded = markerRepository.findByCommentIdAndMemberId(marker.getCommentId(), marker.getMemberId());
        if (alreadyAdded == null) {
            return markerRepository.save(marker);
        }
        return null;
    }
}
