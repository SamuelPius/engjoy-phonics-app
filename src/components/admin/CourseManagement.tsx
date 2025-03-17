
import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Edit, Trash2, PlusCircle, Search, Eye } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

// Sample course data
const initialCourses = [
  { id: '1', title: 'Phonics Basics', level: 'Beginner', students: 32, price: 2999, status: 'Published' },
  { id: '2', title: 'Intermediate Grammar', level: 'Intermediate', students: 24, price: 3999, status: 'Published' },
  { id: '3', title: 'Advanced Reading', level: 'Advanced', students: 18, price: 4999, status: 'Published' },
  { id: '4', title: 'Vowel Sounds Mastery', level: 'Beginner', students: 0, price: 1999, status: 'Draft' },
  { id: '5', title: 'Writing Skills', level: 'Intermediate', students: 10, price: 3499, status: 'Published' },
];

const CourseManagement = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddCourseDialogOpen, setIsAddCourseDialogOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ 
    title: '', 
    level: 'Beginner', 
    price: 2999, 
    status: 'Draft' 
  });

  // Filter courses based on search term
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCourse = () => {
    // Validate input (simplified)
    if (!newCourse.title) {
      toast({
        title: "Error",
        description: "Please enter a course title",
        variant: "destructive"
      });
      return;
    }

    // Add new course with random ID
    const id = Math.random().toString(36).substr(2, 9);
    setCourses([...courses, { ...newCourse, id, students: 0 }]);
    
    // Reset form and close dialog
    setNewCourse({ title: '', level: 'Beginner', price: 2999, status: 'Draft' });
    setIsAddCourseDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Course added successfully",
    });
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
    toast({
      description: "Course deleted successfully",
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-emerald-100 text-emerald-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Course Management</h2>
        <Button onClick={() => setIsAddCourseDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Title</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Price (₹)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>
                    <Badge className={getLevelColor(course.level)} variant="outline">
                      {course.level}
                    </Badge>
                  </TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>₹{course.price}</TableCell>
                  <TableCell>
                    <Badge variant={course.status === 'Published' ? 'default' : 'outline'}>
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <span className="sr-only">Open menu</span>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit course
                        </DropdownMenuItem>
                        {course.status === 'Draft' ? (
                          <DropdownMenuItem>Publish course</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>Unpublish course</DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-destructive"
                          onClick={() => handleDeleteCourse(course.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete course
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No courses found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Add Course Dialog */}
      <Dialog open={isAddCourseDialogOpen} onOpenChange={setIsAddCourseDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
            <DialogDescription>
              Create a new course to add to your catalog.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Course Title
              </label>
              <Input
                id="title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="level" className="text-sm font-medium">
                Level
              </label>
              <select
                id="level"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={newCourse.level}
                onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Price (₹)
              </label>
              <Input
                id="price"
                type="number"
                value={newCourse.price}
                onChange={(e) => setNewCourse({ ...newCourse, price: parseInt(e.target.value) || 0 })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <select
                id="status"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={newCourse.status}
                onChange={(e) => setNewCourse({ ...newCourse, status: e.target.value })}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleAddCourse}>Add Course</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseManagement;
