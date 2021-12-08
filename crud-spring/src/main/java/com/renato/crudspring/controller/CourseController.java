package com.renato.crudspring.controller;

import java.util.List;

import com.renato.model.Course;
import com.renato.repository.CourseRepository;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/courses")
@Component
public class CourseController {

  private final CourseRepository courseRepository;

  public CourseController(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  // @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<Course> list() {
    return courseRepository.findAll();
  }
}
