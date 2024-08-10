declare namespace Subjects {
    interface Teacher {
        experienceTeachingReact?: number;
    }
    class React extends Subject {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }
}
