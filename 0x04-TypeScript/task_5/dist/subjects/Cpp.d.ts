declare namespace Subjects {
    interface Teacher {
        experienceTeachingC?: number;
    }
    class Cpp extends Subject {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }
}
