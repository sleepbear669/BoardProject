package gom.sleep.cave.project.board.comtroller;

import gom.sleep.cave.project.board.model.Marker;
import gom.sleep.cave.project.board.model.Member;
import gom.sleep.cave.project.board.service.MarkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by sleepbear on 2016. 6. 15..
 */
@RestController
@RequestMapping("/api")
@SessionAttributes("member")
@CrossOrigin
public class MarkerController {

    @Autowired
    private MarkerService markerService;

    @RequestMapping(value = "markers", method = RequestMethod.POST)
    public ResponseEntity<?> marking(Member member, @RequestBody Marker marker){
        markerService.add(marker);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
