package gom.sleep.cave.project.board.service;

import gom.sleep.cave.project.board.model.Comment;
import gom.sleep.cave.project.board.model.CommentDto;
import gom.sleep.cave.project.board.repository.CommentRepository;
import gom.sleep.cave.project.board.repository.MarkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static gom.sleep.cave.project.board.model.Marker.MarkerType;

/**
 * Created by sleepbear on 2016. 6. 1..
 */
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private MarkerRepository markerRepository;

    public List<Comment> getComment(long id) {
        return commentRepository.findByMemberId(id);
    }

    public Page<CommentDto.Response> getComment(Pageable pageable) {
        final Page<Comment> comments = commentRepository.findAll(pageable);
        final Page<CommentDto.Response> responsePage = comments
                .map(comment -> {
                    final Map<MarkerType, Long> hashMap = getMarkerCountMap(comment);
                    final CommentDto.Response response = new CommentDto.Response();
                    response.setComment(comment);
                    response.setMarkerCount(hashMap);
                    return response;
                });
        return responsePage;
    }

    private Map<MarkerType, Long> getMarkerCountMap(Comment comment) {
        final Map<MarkerType, Long> hashMap = new HashMap<>();
        for (MarkerType markerType : MarkerType.values()) {
            final Long count = markerRepository.countByCommentIdAndMarkerType(comment.getId(), markerType);
            hashMap.put(markerType, count);
        }
        return hashMap;
    }

    public Comment add(Comment comment) {
        return commentRepository.save(comment);
    }

    public void remove(long commentId) {
        commentRepository.delete(commentId);
    }
}
