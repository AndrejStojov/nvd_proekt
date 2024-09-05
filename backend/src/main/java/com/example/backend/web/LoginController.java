//package com.example.backend.web;
//
//import com.example.backend.domain.models.User;
//import com.example.backend.domain.models.excepitons.InvalidUserCredentialsException;
//import com.example.backend.service.impl.AuthenticationService;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
//@RequestMapping("/api/login")
//public class LoginController {
//
//    private final AuthenticationService authService;
//
//    public LoginController(AuthenticationService authService) {
//        this.authService = authService;
//    }
//
//    @GetMapping
//    public String getLoginPage(Model model) {
//        model.addAttribute("bodyContent", "login");
//        return "master-template";
//    }
//
//    @PostMapping
//    public String login(HttpServletRequest request, Model model) {
//        User user = null;
//        try {
//            user = this.authService.login(request.getParameter("username"),
//                    request.getParameter("password"));
//            request.getSession().setAttribute("user", user);
//            return "redirect:/home";
//        } catch (InvalidUserCredentialsException exception) {
//            model.addAttribute("hasError", true);
//            model.addAttribute("error", exception.getMessage());
//            return "login";
//        }
//    }
//}
