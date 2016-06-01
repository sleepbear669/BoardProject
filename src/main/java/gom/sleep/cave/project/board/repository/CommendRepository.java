package gom.sleep.cave.project.board.repository;

import gom.sleep.cave.project.board.model.Commend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@Repository
public interface CommendRepository extends JpaRepository<Commend, Long> {
}
