package ai.bench.perch.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientForwardController {

    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward() {
        return "forward:/";
    }
}
