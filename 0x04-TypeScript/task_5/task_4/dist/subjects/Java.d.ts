declare namespace Subjects {
    interface Teacher {
        experienceTeachingJava?: number;
    }
    class Java extends Subject {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }
}
