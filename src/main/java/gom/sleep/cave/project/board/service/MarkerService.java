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


    public void add(Marker marker) {
        markerRepository.save(marker);
    }
}
